import figlet, { Options } from 'figlet';

const bootTextOptions: Options = {
  font: 'Sub-Zero',
  width: 90,
  whitespaceBreak: true,
};

export function loadInitalText(text = 'Boot') {
  figlet.text('Boot', bootTextOptions, (err, data) => {
    if (err) {
      console.log('Something went wrong....');
      console.dir(err);
      return;
    }
    console.log(data);
  });
}
