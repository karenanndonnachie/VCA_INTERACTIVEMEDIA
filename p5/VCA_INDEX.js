let stickyNote;
let textInput;

function setup() {
  createCanvas(100, 100);

  background(200);

  // Create a div element and style it.
  stickyNote = createDiv('Note');
  stickyNote.position(5, 5);
  stickyNote.size(80, 20);
  stickyNote.style('font-size', '16px');
  stickyNote.style('font-family', 'Comic Sans MS');
  stickyNote.style('background', 'orchid');
  stickyNote.style('padding', '5px');

  // Make the note draggable.
  stickyNote.draggable();

  // Create a panel div and style it.
  let panel = createDiv('');
  panel.position(5, 40);
  panel.size(80, 50);
  panel.style('background', 'orchid');
  panel.style('font-size', '16px');
  panel.style('padding', '5px');
  panel.style('text-align', 'center');

  // Make the panel draggable.
  panel.draggable();

  // Create a text input and style it.
  textInput = createInput('Note');
  textInput.size(70);

  // Add the input to the panel.
  textInput.parent(panel);

  // Call handleInput() when text is input.
  textInput.input(handleInput);

  describe(
    'A gray square with two purple rectangles that move when dragged. The top rectangle displays the text that is typed into the bottom rectangle.'
  );
}

// Update stickyNote's HTML when text is input.
function handleInput() {
  stickyNote.html(textInput.value());
}
