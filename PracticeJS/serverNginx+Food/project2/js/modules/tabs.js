function tabs(tabsSelector, tabContentSelector, tabsParentSelector, activeClass) {
    const   tabs = document.querySelectorAll(tabsSelector),
            tabsContent = document.querySelectorAll(tabContentSelector),
            tabsParent = document.querySelector(tabsParentSelector);
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, index) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }
    function showTabContent(index = 0) {
        tabs[index].classList.add(activeClass);
        tabsContent[index].classList.add('show', 'fade');
        tabsContent[index].classList.remove('hide')
    }
}

export default tabs;