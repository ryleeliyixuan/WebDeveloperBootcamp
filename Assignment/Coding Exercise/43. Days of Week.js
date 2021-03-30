// DEFINE YOUR FUNCTION BELOW:
function returnDay(num){
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  if (num >= 1 && num <= 7) {
      return days[num-1];
  }
  return null;
}