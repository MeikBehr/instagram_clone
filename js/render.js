function renderContentHTML(post, number_comments) {
    return /*html*/ `
	<article id="article${post["id"]}" class="article_container">
							<div class="post_container">
								<a href="#article${post["id"]}">
									<div id="post_author">
										<div class="post_author_container">
												<div class="post_author_inner">
													<div class="post_author_icon"></div>
													<img class="post_author_image" src="${post["author_img"]}" alt="" />
												</div>
										</div>
									</div>
									<div class="post_author_text">
										<span id="post_author_name" class="post_author_text-name">${post["author"]}</span>
										<div id="verified_svg"></div>
										<span>&middot; ${post["since"]}</span>
									</div>
								</a>
								<a href="#article${post["id"]}">
									<div>
										<div class="optionsSVG"></div>
									</div>
								</a>
							</div>
							<div>
								<a href="#article${post["id"]}">
									<div class="content_container_image"  style="background-image: url('${post["post_img"]}');"></div>
								</a>
							</div>
							<div>
								<div class="post_container_svg">
									<div class="post_svg_container-left">
										<div class="svg_container">
											<div id="like${post["id"]}" class="like_svg" style="background-image: url('${post["like_url"]}');"></div>
										</div>
										<div class="svg_container">
											<div id="comment${post["id"]}" class="comment_svg"></div>
										</div>
										<div class="svg_container">
											<div id="direct_svg"></div>
										</div>
									</div>
									<div class="post_svg_container-right">
										<div id="save${post["id"]}" class="save_svg" style="background-image: url('${post["save_url"]}');"></div>
									</div>
								</div>
								<div class="post_likes_container">
									<div>Gefällt <span id="post_like_counter${post["id"]}">${post["like_counter"]}</span> Mal</div>
									
									<div class="post_author_contents">
										<span id="post_author_name">${post["author"]}</span>
										<span id="post_author_description">${post["post_txt"]}</span>
									</div>
								</div>
								<div id="post_comments${post["id"]}" class="post_comments_container">
									<div>Alle <span id="post_comment_counter${post["id"]}">${number_comments}</span> Kommentare ansehen</div>
								</div>
								<div class="comment_container">
									<input id="comment_input${post["id"]}" type="text" required class="comment_input" placeholder="Kommentieren...">
								</div>
							</div>
						</article>

`;
}

function renderNavWideHTML() {
    return /*html*/ `
	<a href="#">
                <div id="nav__title"></div>
            </a>
            <div class="nav__container">
                <div class="nav__options">
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-start"></div>
                            <span class="nav__options-containers-paddingL">Startseite</span>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-search"></div>
                            <span class="nav__options-containers-paddingL">Suchen</span>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-explore"></div>
                            <span class="nav__options-containers-paddingL">Entdecken</span>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-reels"></div>
                            <span class="nav__options-containers-paddingL">Reels</span>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-direct"></div>
                            <span class="nav__options-containers-paddingL">Nachrichten</span>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-notification"></div>
                            <span class="nav__options-containers-paddingL">Benachrichtigungen</span>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-createNew"></div>
                            <span class="nav__options-containers-paddingL">Erstellen</span>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="owener__profil"></div>
                            <span class="nav__options-containers-paddingL">Profil</span>
                        </a>
                    </div>
                </div>
                <div class="nav__more">
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="https://www.threads.net/" target="_blank">
                            <div id="nav__options-threads"></div>
                            <span class="nav__options-containers-paddingL nav-fontSize">Threads</span>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-more"></div>
                            <span class="nav__options-containers-paddingL nav-fontSize">Mehr</span>
                        </a>
                    </div>
                </div>
            </div>
`;
}

function renderNavSmallHTML() {
    return /*html*/ `
	<a href="#">
                <div id="nav__title-small"></div>
            </a>
            <div class="nav__container">
                <div class="nav__options">
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-start"></div>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-search"></div>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-explore"></div>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-reels"></div>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-direct"></div>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-notification"></div>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-createNew"></div>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="owener__profil"></div>
                        </a>
                    </div>
                </div>
                <div class="nav__more">
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="https://www.threads.net/" target="_blank">
                            <div id="nav__options-threads"></div>
                        </a>
                    </div>
                    <div class="nav__options-containers">
                        <a class="nav__options-link" href="#">
                            <div id="nav__options-more"></div>
                        </a>
                    </div>
                </div>
            </div>
`;
}

function renderFooterHTML() {
    return /*html*/ `
	<section class="footer__user">
                    <div class="footer__user__container">
                        <a id="footer__owener__profil" href="#"></a>
                        <span class="footer__user__container-profil-text">current.user</span>
                        <div class="footer__user-change">wechseln</div>
                    </div>
                </section>
                <section class="footer__suggestions">
                    <div class="footer__suggestions__heading-container">
                        <div class="footer__suggestions-heading">Vorschläge für Dich</div>
                        <div class="footer__suggestions-seeAll">Alle ansehen</div>
                    </div>
                    <div class="footer__suggestions-container">
                        <a href="https://www.instagram.com/junus.ergin/" target="_blank">
                            <img src="./src/img/Author_kevin.jpg" alt="" />
                        </a>
                        <div class="footer__suggestions-container-textcontainer">
                            <span>kevinchromik</span>
                            <span>developer.akademie ist Follower</span>
                        </div>
                        <div class="footer__suggestions-follow">Folgen</div>
                    </div>
                    <div class="footer__suggestions-container">
                        <a href="https://www.instagram.com/realmanuthaler/" target="_blank">
                            <img src="./src/img/Author_manuel.jpg" alt="" />
                        </a>
                        <div class="footer__suggestions-container-textcontainer">
                            <span>realmanuthaler</span>
                            <span>developer.akademie ist Follower</span>
                        </div>
                        <div class="footer__suggestions-follow">Folgen</div>
                    </div>
                    <div class="footer__suggestions-container">
                        <a href="https://www.instagram.com/niklassteenfatt/" target="_blank">
                            <img src="./src/img/Author_niklsd.jpg" alt="" />
                        </a>
                        <div class="footer__suggestions-container-textcontainer">
                            <span>niklassteenfatt</span>
                            <span>junus.ergin ist Follower</span>
                        </div>
                        <div class="footer__suggestions-follow">Folgen</div>
                    </div>
                    <div class="footer__suggestions-container">
                        <a href="https://www.instagram.com/kevinpowellcss/" target="_blank">
                            <img src="./src/img/Author_kevin_powell.jpg" alt="" />
                        </a>
                        <div class="footer__suggestions-container-textcontainer">
                            <span>kevinpowellcss</span>
                            <span>Jeder ist Follower</span>
                        </div>
                        <div class="footer__suggestions-follow">Folgen</div>
                    </div>
                </section>
                <section class="footer__footer">
                    <div>
                        <a href="https://about.instagram.com/" target="_blank">Info &middot; </a>
                        <a href="https://help.instagram.com/" target="_blank">Hilfe &middot; </a>
                        <a href="https://about.instagram.com/blog/" target="_blank">Presse &middot; </a>
                        <a href="https://developers.facebook.com/docs/instagram" target="_blank">API &middot; </a>
                        <a href="https://www.instagram.com/about/jobs/" target="_blank">Jobs &middot; </a>
                        <a href="./datenschutz.html" target="_blank">Datenrichtlinie</a>
                    </div>
                    <div>
                        <a href="./impressum.html" target="_blank">Nutzungsbedingungen und Impressum &middot;</a>
                    </div>
                    <div>
                        <a href="#">UrhDaG/MStV &middot; </a>
                        <a href="#">Standorte &middot; </a>
                        <a href="#">Sprache &middot; </a>
                        <a href="#">Meta Verified</a>
                    </div>
                    <br />
                    <div>Origin © 2024 Instagram from Meta, copied for education</div>
                    <div>This page is only for private use!</div>
                </section>
	
`;
}

function renderCommentsContainerHTML(post) {
    return /*html*/ `
<div class="comments-container">
        <div class="comments-container-leftSide">
                <div class="comments_image" style="background-image: url('${post["post_img"]}');"></div>
        </div>
        <div  class="comments-container-rightSide">
            <div class="comments-container-rightSide-head">
                <div class="post_container comments_post_container_border">
                <a href="#article${post["id"]}">
					<div id="post_author">
						<div class="post_author_container">
							<div class="post_author_inner">
								<div class="post_author_icon"></div>
									<img class="post_author_image" src="${post["author_img"]}" alt="" />
								</div>
							</div>
						</div>
					<div class="post_author_text">
						<span id="post_author_name" class="post_author_text-name">${post["author"]}</span>
						<div id="verified_svg"></div>
						<span>&middot; ${post["since"]}</span>
					</div>
				</a>
                <a href="#article${post["id"]}">
					<div>
						<div class="optionsSVG"></div>
					</div>
				</a>
                </div>
                <div class="post_author_contents">
					<span id="post_author_name">${post["author"]}</span>
					<span id="post_author_description">${post["post_txt"]}</span>
				</div>
            </div>
            <div id="comment-section"></div>
            <div  class="comments-container-rightSide-foot">
                <div>
                    <div class="post_container_svg">
                        <div class="post_svg_container-left">
                            <div class="svg_container">
                                <div id="comment_like${post["id"]}" class="like_svg" style="background-image: url('${likeORnot(post)}')"></div>
                            </div>
                            <div class="svg_container">
                                <div id="direct_svg"></div>
                            </div>
                        </div>
                    </div>
                    <div class="post_likes_container">
                        <div>Gefällt <span id="comments_post_like_counter${post["id"]}">${post["like_counter"]}</span> Mal</div>
                    </div>
                    <div class="comment_container">
						<input id="comment_section_comment_input${post["id"]}" type="text" required class="comment_input" placeholder="Kommentieren...">
					</div>
                </div>
            </div>
        </div>
    </div>
    <div id="comments_overlay_close">X</div>
    `;
}

function renderCommentsHTML(author, comment) {
    return /*html*/ `
	<div class="all_comment_container">
		<div class="comment_container">
			<p><b>${author} :</b> ${comment}</p>
		</div>
	</div>
`;
}
