click();

function click() {

    var amount = [];
    document.body.addEventListener("click", function (event) {
      if (event.target.className == "add") {
        console.log(event.target.parentElement.children[1].outerText);
        var item = event.target.parentElement.children[1].outerText;
        item = item.split("$");
        console.log(item);
        amount.push(item[1]);
        $(".item").append(item[0] + "<br>");
        $(".amount").append("$ " + item[1] + "<br>");
      }
      console.log(amount);
      amount = amount.map(Number);
      console.log(amount);
    
      var sum = amount.reduce(function (a, b) {
        return a + b;
      }, 0);
    
      console.log(sum);
      var total = sum.toFixed(2);
    
      document.getElementById("total").innerHTML = "$ " + total;
    });
    
    }