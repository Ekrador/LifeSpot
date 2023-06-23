﻿function askForReview() {
    let review = {}
    review["userName"] = prompt("Как вас зовут ?")
    if (review["userName"] == null) {
        return
    }

    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }

    review["date"] = new Date().toLocaleString()

    postReview(review)
}

const postReview = review => { 
    document.getElementsByClassName('reviews')[0].innerHTML += '<div class="review-text">\n' +
    `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
    `<p>${review['comment']}</p>` +
    '</div>';
}
