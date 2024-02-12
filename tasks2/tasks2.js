let timeoutId;

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

function duplicateText() {
  input2.value = input1.value;
}

input1.addEventListener('input', function() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(duplicateText, 1000);
});