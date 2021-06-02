$(document).ready(function(){

  //Slider 
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: true
      });

    // Post
    var post = [
      {
        title: "Prueba de titulo 1",
        date: "Publicado el " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Et incididunt deserunt proident ullamco ipsum ut cillum laborum ea in. Fugiat ad aliquip nulla dolor qui qui occaecat occaecat fugiat. Ad nisi ea veniam Lorem ullamco commodo Lorem aute aute eu nostrud ex. Ut eiusmod dolore eu amet eiusmod deserunt aliqua eiusmod commodo eiusmod aliqua cillum amet ex. Culpa do mollit commodo eu amet magna eu. Officia culpa officia do Lorem ut nulla velit commodo elit pariatur id sit.'
      },
      {
        title: "Prueba de titulo 2",
        date: "Publicado el " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Et incididunt deserunt proident ullamco ipsum ut cillum laborum ea in. Fugiat ad aliquip nulla dolor qui qui occaecat occaecat fugiat. Ad nisi ea veniam Lorem ullamco commodo Lorem aute aute eu nostrud ex. Ut eiusmod dolore eu amet eiusmod deserunt aliqua eiusmod commodo eiusmod aliqua cillum amet ex. Culpa do mollit commodo eu amet magna eu. Officia culpa officia do Lorem ut nulla velit commodo elit pariatur id sit.'
      },
      {
        title: "Prueba de titulo 3",
        date: "Publicado el " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Et incididunt deserunt proident ullamco ipsum ut cillum laborum ea in. Fugiat ad aliquip nulla dolor qui qui occaecat occaecat fugiat. Ad nisi ea veniam Lorem ullamco commodo Lorem aute aute eu nostrud ex. Ut eiusmod dolore eu amet eiusmod deserunt aliqua eiusmod commodo eiusmod aliqua cillum amet ex. Culpa do mollit commodo eu amet magna eu. Officia culpa officia do Lorem ut nulla velit commodo elit pariatur id sit.'
      },
      {
        title: "Prueba de titulo 4",
        date: "Publicado el " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
        content: 'Et incididunt deserunt proident ullamco ipsum ut cillum laborum ea in. Fugiat ad aliquip nulla dolor qui qui occaecat occaecat fugiat. Ad nisi ea veniam Lorem ullamco commodo Lorem aute aute eu nostrud ex. Ut eiusmod dolore eu amet eiusmod deserunt aliqua eiusmod commodo eiusmod aliqua cillum amet ex. Culpa do mollit commodo eu amet magna eu. Officia culpa officia do Lorem ut nulla velit commodo elit pariatur id sit.'
      }
    ];
    
    post.forEach((item, index) => {
      var post = `
        <article class="post">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>
          ${item.content}
          </p>
          <a href="#" class="button-more">Leer más</a>
        </article>
      
      `;

      $("#posts").append(post);
    });

    //Selector de tema

    var color = localStorage.getItem("theme");
    var theme = $("#theme");

    switch (color) {
      case "green":
        theme.attr("href", "css/green.css");
        break;
      case "blue":
        theme.attr("href", "css/blue.css");
        break;
      case "red":
        theme.attr("href", "css/red.css");
        break;
      default:
        break;
    }

    
    $(".to-green").click(function(){
      theme.attr("href", "css/green.css");
      localStorage.setItem("theme","green"); 
    });

    $(".to-blue").click(function(){
      theme.attr("href", "css/blue.css");
      localStorage.setItem("theme","blue"); 
    });

    $(".to-red").click(function(){
      theme.attr("href", "css/red.css");
      localStorage.setItem("theme","red"); 
    });
});