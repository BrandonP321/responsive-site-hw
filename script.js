$('.img-thumbnail').on('click', function() {
    if ($(this).attr('alt') != 'cute kitten') {
        $('.modal').css('display', 'block')
        $('.modal-content').empty()

        var gitUrl = $(this).attr('data-giturl')
        var siteLink = $(this).attr('data-link')

        var titleEle = $('<h2>')
        const titleText = $(this).attr('data-title')
        titleEle.attr('class', 'siteHeading')
        titleEle.text(titleText)

        var imgEle = $('<img>')
        imgEle.attr('src', $(this).attr('src'))
        imgEle.attr('class', 'lightboxImg')
        
        var gitEle = $('<a>')
        gitEle.attr('href', gitUrl)
        gitEle.attr('target', '_blank')
        gitEle.text('View the git repository here!')

        var linkEle = $('<a>')
        linkEle.attr('href', siteLink)
        linkEle.attr('target', '_blank')
        linkEle.text('Check out the site here!')

        $('.modal-content').append(titleEle)
        $('.modal-content').append(imgEle)
        $('.modal-content').append(linkEle)
        $('.modal-content').append(gitEle)
    }
})

$('.closeModal').on('click', function() {
    $('.modal').css('display', 'none')
})