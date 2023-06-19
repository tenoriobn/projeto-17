const markAllAsRead = document.querySelector(".header__mark-all");

let allRead = false;

markAllAsRead.addEventListener("click", () => {
    const articles = document.querySelectorAll("article");

    if (!allRead) {
        articles.forEach((article) => {
            if(article.classList.contains("unread")) {
                article.classList.remove("unread");
                article.classList.add("read");

                const notificationIcons = document.querySelectorAll(".notification__content__icon");

                notificationIcons.forEach((icon) => {
                    icon.style.display = "none";
                });
            }
        });

        allRead = true;
        markAllAsRead.textContent = "Mark all as unread"
    } else {
        const notificationContents = document.querySelectorAll(".notification__content");
        articles.forEach((article) => {
            if(article.classList.contains("read")) {
                article.classList.remove("read");
                article.classList.add("unread");
            }
        });

        notificationContents.forEach((notificationContent) => {
            const notificationIcon = document.createElement('span');
            notificationIcon.classList.add('notification__content__icon');

            notificationContent.appendChild(notificationIcon)
        });

        allRead = false;
        markAllAsRead.textContent = "Mark all as read"
    }
})