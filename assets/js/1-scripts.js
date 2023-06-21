const markAllAsRead = document.querySelector(".header__mark-all");
const notificationsCount = document.querySelector(".header__notifications__count");

let allRead = false;

markAllAsRead.addEventListener("click", () => {
    const articles = document.querySelectorAll("article");
    const unreadArticles = document.querySelectorAll(".read");
    const unreadCount = unreadArticles.length;

    if (!allRead) {
        articles.forEach((article) => {
            if(article.classList.contains("unread")) {
                article.classList.remove("unread");
                article.classList.add("read");

                const notificationIcons = document.querySelectorAll(".notification__content__icon");

                notificationIcons.forEach((icon) => {
                    icon.style.display = "none";
                });

                notificationsCount.style.display = "none";
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

                notificationsCount.style.display = "inline-block";
                notificationsCount.textContent = unreadCount;
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