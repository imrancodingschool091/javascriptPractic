let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let hindi = parseInt(document.getElementById("hindi").value);
  let english = parseInt(document.getElementById("english").value);
  let java = parseInt(document.getElementById("java").value);
  let cpp = parseInt(document.getElementById("cpp").value);
  let node = parseInt(document.getElementById("node").value);
  let fail = document.getElementById("fail");

  if (hindi < 30) {
    fail.innerText = `You Are Fail in hidi ${hindi}`;
  } else if (english < 30) {
    fail.innerText = `You Are Fail in english ${english}`;
  } else if (java < 30) {
    fail.innerText = `You Are Fail in java ${java}`;
  } else if (cpp < 30) {
    fail.innerText = `You Are Fail in cpp ${cpp}`;
  } else if (node < 30) {
    fail.innerText = `You Are Fail in node ${node}`;
  }

  let total = document.getElementById("total");
  let totalPer = document.getElementById("totalPer");
  let totalMarks = hindi + english + java + cpp + node;
  let totalNum = totalMarks.toString();

  total.innerText = `Total Marks: ${totalNum}`;

  totalPer.innerText = `Total Percentage : ${totalNum / 5} %`;
});
