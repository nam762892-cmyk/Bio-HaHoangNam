var titles = [
  "@",
  "@H",
  "@Ho",
  "@Hoa",
  "@Hoag",
  "@HoagN",
  "@HoagNa",
  "@HoagNam",
  "@HoagNa",
  "@HoagN",
  "@Hoag",
  "@Hoa",
  "@Ho",
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
