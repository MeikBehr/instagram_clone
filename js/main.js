"use strict";


function init() {
	dataFromLocalStorageOrDefault();
	saveDataToLocalStorage()
	renderNavInitial();
	renderFooterInitial();
	renderPosts();
	EventListener();
}


function checkIFLocalStorageIsEmpty() {
    return ((JSON.parse(localStorage.getItem('posts')) == null) || (localStorage.getItem('posts').length < 3)) ? true : false;
}


function dataFromLocalStorageOrDefault() {
	!checkIFLocalStorageIsEmpty() ? posts = JSON.parse(localStorage.getItem('posts')) : posts = originData;
}


function saveDataToLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(posts));
}


function renderNavInitial()  {
	const sectionNav = document.getElementById('nav');
	displaySizeX > 1150 ? (sectionNav.innerHTML = renderNavWideHTML(), hasRenderedNav = true) : (sectionNav.innerHTML = renderNavSmallHTML(), hasRenderedNav = false);
}


function renderFooterInitial() {
	const sectionFooter = document.getElementById('footer');
	sectionFooter.innerHTML = renderFooterHTML();
	displaySizeX > 1000 ? sectionFooter.style.display = 'inline-block' : sectionFooter.style.display = 'none';
}


function renderPosts() {
	const articles = document.getElementById('articles');
	articles.innerHTML = '';
	for (let i = 0; i < posts.length; i++) {
		const post = posts[i];
		const number_comments = post['comments_names'].length;
		articles.innerHTML += renderContentHTML(post, number_comments);
	}
}


function eventListenerLike(post, i) {
	const like = document.getElementById(`like${post['id']}`);
	like.addEventListener('click', () => {
		post['like_boolean'] ? updateLikeStatus(like, i, false) : updateLikeStatus(like, i, true);
	})
}


function eventListenerSave(post, i) {
	const save = document.getElementById(`save${post['id']}`);
	save.addEventListener('click', () => {
		post['save_boolean'] ? updateSaveStatus(save, i, false) : updateSaveStatus(save, i, true);
	})
}


function eventListenerCommentIcon(post) {
	const comment = document.getElementById(`comment${post['id']}`);
	comment.addEventListener('click', () => {
		showComments(post);
	})
}


function eventListenerCommentText(post) {
	const post_comments = document.getElementById(`post_comments${post['id']}`);
	post_comments.addEventListener('click', () => {
		showComments(post);
	})
}


function aNewCommentIsAdded(post, i, text, commentInput) {
	post['comments_names'].push('current.user');
	post['comments_texts'].push(text);
	commentInput.value = '';
	const number_coments = post['comments_names'].length;
	const numberID = document.getElementById(`post_comment_counter${i}`);
	numberID.innerText = number_coments;
	saveDataToLocalStorage();
}


function eventListenerInputComments(post, i) {
	let commentInput = document.getElementById(`comment_input${i}`);
	commentInput.addEventListener('keypress', (event) => {
		let text = commentInput.value;
		if (event.key === 'Enter' && text) {
			aNewCommentIsAdded(post, i, text, commentInput)
		}
	})
}


function EventListener() {
	for (let i = 0; i < posts.length; i++) {
		const post = posts[i];
		eventListenerLike(post, i);
		eventListenerSave(post, i);
		eventListenerCommentIcon(post);
		eventListenerCommentText(post);
		eventListenerInputComments(post, i)
	}
}


function updateLikeStatus(like, i, isLiked) {
    const imagePath = isLiked ? './src/img/svg/like.svg' : './src/img/svg/like_not.svg';
    like.style.backgroundImage = `url(${imagePath})`;
	updatePostStatus(i, 'like', isLiked, imagePath);
    renderAfterLikeChange(like, i);
}


function updateSaveStatus(save, i, isSaved) {
    const imagePath = isSaved ? './src/img/svg/save.svg' : './src/img/svg/save_not.svg';
    save.style.backgroundImage = `url(${imagePath})`;
	updatePostStatus(i, 'save', isSaved, imagePath);
    save.innerHTML = '';
	saveDataToLocalStorage();
}


function updatePostStatus(i, type, status, imagePath) {
    const postType = type === 'like' ? 'like_' : 'save_';
    posts[i][`${postType}boolean`] = status;
    posts[i][`${postType}url`] = imagePath;
    if (type === 'like') {
        posts[i][`${postType}counter`] += status ? 1 : -1;
    }
}


function likeORnot(post) {
    return post['like_boolean'] ? './src/img/svg/like.svg' : './src/img/svg/like_not.svg';
}


function renderAfterLikeChange(like, i) {
	like.innerHTML = '';
	const counter = document.getElementById(`post_like_counter${i}`);
	counter.innerHTML = posts[i].like_counter;
	saveDataToLocalStorage();
}


function resizingNav(displaySizeX) {
	const sectionNav = document.getElementById('nav');
	const shouldBeWide = displaySizeX > 1150;
	if (shouldBeWide !== hasRenderedNav) {
		sectionNav.innerHTML = '';
		sectionNav.innerHTML = shouldBeWide ? renderNavWideHTML() : renderNavSmallHTML();
		hasRenderedNav = shouldBeWide;
	}
}


function resizingFooter(displaySizeX) {
	const sectionFooter = document.getElementById('footer');
	const showFooter = displaySizeX > 1000;
	if (showFooter !== hasRenderedFooter) {
		sectionFooter.style.display = showFooter ? 'inline-block' : 'none';
		hasRenderedFooter = showFooter;
	}
}


window.addEventListener("resize", function() {
	displaySizeX = window.innerWidth;
	resizingNav(displaySizeX);
	resizingFooter(displaySizeX);
}); 


function showComments(post) {
	const comments_overlay = document.getElementById('comments-overlay');
	comments_overlay.innerHTML = renderCommentsContainerHTML(post);
	comments_overlay.style.display = 'flex';
	document.body.classList.add('no-scroll');
	iterateEachComment(post);
	CommentEventListener(post);
}


function iterateEachComment(post) {
	const commentSection = document.getElementById('comment-section');
	const comments = post['comments_names'].map((author, index) =>
		renderCommentsHTML(author, post['comments_texts'][index])
	);
	commentSection.innerHTML = comments.join('');
	commentSection.scrollTop = commentSection.scrollHeight - commentSection.clientHeight;
}


function hideComments() {
	const comments_overlay = document.getElementById('comments-overlay');
	comments_overlay.style.display = 'none';
	document.body.classList.remove('no-scroll');
}


function commentsSectionChangeLike(post, commentLike, i) {
	commentLike.addEventListener('click', () => {
		const like = document.getElementById(`like${post['id']}`);
		const imagePath = post['like_boolean'] ? './src/img/svg/like_not.svg' : './src/img/svg/like.svg';
		commentLike.style.backgroundImage = `url(${imagePath})`;
		like.style.backgroundImage = `url(${imagePath})`;
		post['like_boolean'] = !post['like_boolean'];
		post['like_url'] = imagePath;
		post['like_counter'] += post['like_boolean'] ? +1 : -1;
		const counter = document.getElementById(`comments_post_like_counter${i}`);
		counter.innerHTML = post['like_counter'];
		saveDataToLocalStorage();
	});
}


function commentsSectionCloseOverlay(post, commentLike, i, close) {
	const closeFunction = () => {
		hideComments();
		const imagePath = post['like_boolean'] ? './src/img/svg/like_not.svg' : './src/img/svg/like.svg';
		commentLike.style.backgroundImage = `url(${imagePath})`;
		renderAfterLikeChange(commentLike, i);
	};
	close.addEventListener('click', closeFunction);
	document.addEventListener('keydown', (event) => {
		if (event.key === "Escape") {
			closeFunction();
		}
	});
}


function commentsSectionInputFiled(post, i) {
	let commentInput = document.getElementById(`comment_section_comment_input${i}`);
	let text = '';
	commentInput.addEventListener('keypress', (event) => {
		text = commentInput.value;
		if (event.key === 'Enter' && text) {
			aNewCommentIsAdded(post, i, text, commentInput);
			iterateEachComment(post);
		}
	})
}


function CommentEventListener(post) {
	const commentLike = document.getElementById(`comment_like${post['id']}`);
	const close = document.getElementById(`comments_overlay_close`);
	const i = post['id'];
	commentsSectionChangeLike(post, commentLike, i);
	commentsSectionCloseOverlay(post, commentLike, i, close)
	commentsSectionInputFiled(post, i);
}
