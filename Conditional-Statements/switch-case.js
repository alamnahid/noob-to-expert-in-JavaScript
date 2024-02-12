// Use the switch statement to select one of many code blocks to be executed.

/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

const day = 3;

switch (day) {
    case 1:
        console.log('saturday');
        break;
    case 2:
        console.log('sunday');
        break;
    case 3:
        console.log('monday');
        break;
    case 4:
        console.log('tuesday');
        break;
    case 5:
        console.log('wednesday');
        break;
    case 6:
        console.log('thursday');
        break;
    case 7:
        console.log('friday');
        break;
    default:
        console.log("Something Wrong!!");
        break;
}