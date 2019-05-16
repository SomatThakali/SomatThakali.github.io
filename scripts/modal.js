$(document).ready(function() {
  // MODAL
  var modalText = {
    retreats: {
      title: "Retreats",
      tag: "BOOKING RETREATS.",
      detail:
        "Blue Llama Retreats offers overnight accommodations in the most unexpected places in New York City. Spend a night in Grand Central Station, Central Park or The High Line for a stay that will re-invigorate you and yours.",
      link: "https://somatthakali.github.io/Project_1/templates/index.html",
      link1: "https://github.com/SomatThakali/Project_1"
    },
    hangman: {
      title: "Hangman",
      tag: "WORD GUESS GAME",
      detail:
        "Hangman is a online guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters or numbers, within a certain number of guesses.",
      link: "https://somatthakali.github.io/Word-Guess-Game/",
      link1: "https://github.com/SomatThakali/Word-Guess-Game"
    },
    borrow: {
      title: "Something Borrow and Lend",
      tag: "SELF-SUFFICIENT COMMUNITIES",
      detail:
        "Something Borrowed is a borrowing / lending web application that allows users to list items for lending others or to borrow items listed by others. By developing Something Borrowed, we want to create self-sufficient communities through a web application.",
      link: "https://something-borrowed-2019.herokuapp.com",
      link1: "https://github.com/SomatThakali/project2"
    },
    bamazon: {
      title: "bAmazon",
      tag: "AMAZON-LIKE STOREFRONT.",
      detail:
        "bAmazon is a node app that will take in orders from customers and deplete stock from the store's inventory. It will also track product sales across the store's departments and then provide a summary of the highest-grossing departments in the store. ",
      link1: "https://github.com/SomatThakali/bamazon-database"
    },
    friend: {
      title: "Friend Finder",
      tag: "DATING APP",
      detail:
        "FriendFinder application -- basically a dating app. This full-stack site will take in results from the users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.",
      link: "https://friend-finder-smt.herokuapp.com",
      link1: "https://github.com/SomatThakali/friendFinder"
    },
    liri: {
      title: "Liri",
      tag: "Language Interpretation and Recognition Interface",
      detail:
        "LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives US back data.",
      link1: "https://github.com/SomatThakali/liri-node-app"
    }
  };

  $("#gallery .button").on("click", function() {
    fillModal(this.id);
    $(".modal-wrap").addClass("visible");
  });

  $(".close").on("click", function() {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  $(".mask").on("click", function() {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  var carousel = $("#carousel"),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $("#next").click(function() {
    shiftSlide(-1);
  });
  $("#prev").click(function() {
    shiftSlide(1);
  });

  carousel.on("mousedown", function() {
    if (carousel.hasClass("transition")) return;
    dragStart = event.pageX;
    $(this).on("mousemove", function() {
      dragEnd = event.pageX;
      $(this).css("transform", "translateX(" + dragPos() + "px)");
    });
    $(document).on("mouseup", function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $(".carousel-wrap, .slide").css("width", slideWidth);
    $(".modal").css("max-width", slideWidth);
    $("#carousel").css("left", slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass("transition")) return;
    dragEnd = dragStart;
    $(document).off("mouseup");
    carousel
      .off("mousemove")
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)");
    setTimeout(function() {
      if (direction === 1) {
        $(".slide:first").before($(".slide:last"));
      } else if (direction === -1) {
        $(".slide:last").after($(".slide:first"));
      }
      carousel.removeClass("transition");
      carousel.css("transform", "translateX(0px)");
    }, 700);
  }

  function fillModal(id) {
    $("#modal .title").text(modalText[id].title);
    $("#modal .detail").text(modalText[id].detail);
    $("#modal .tag").text(modalText[id].tag);
    if (modalText[id].link)
      $("#modal .button")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link);
    if (modalText[id].link1)
      $("#modal .button2")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link1);

    $.each($("#modal li"), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($("#modal .slide"), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + "-" + index + ".png') center center/cover",
        backgroundSize: "cover"
      });
    });
  }
});
