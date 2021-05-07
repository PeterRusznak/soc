import soc from 'ic:canisters/soc';

soc.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
