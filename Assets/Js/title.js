var titles = [
  "@",
  "@H",
  "@Ha",
  "@Hak",
  "@Haki",
  "@HakiS",
  "@HakiSk",
  "@HakiSky",
  "@HakiSk",
  "@HakiS",
  "@Haki",
  "@Hak",
  "@Ha",
  "@H"
];

function changeTitle() {
  var index = 0;

  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
