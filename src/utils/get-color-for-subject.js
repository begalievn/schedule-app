const colorsList = [
  '#6beb34',
  '#ebde34',
  '#d1a045',
  '#aca1f0',
  '#a1e0f0',
  '#9fe3a3',
  '#e8a2e7',
  '#fc7eb9',
  '#e0aca2',
  '#FFFF00',
  '#7DF9FF',
  '#FF69B4',
  '#40E0D0',
  '#FFFF00',
  '#FF1493',
  '#FF7F50',
  '#87CEEB',
  '#FFA500',
  '#BF00FF',
  '#AEC6CF',
  '#98FB98',
  '#FFDAB9',
  '#D3D3D3',
  '#F4C2C2',
  '#C8A2C8',
  '#F5F5DC',
  '#87CEEB',
  '#D8BFD8',
  '#7FFFD4',
  '#F08080',
  '#AFEEEE',
  '#E0B0FF',
  '#FFE4E1',
  '#FFFFF0',
  '#FFA07A',
  '#CCCCFF',
  '#FFFF33',
  '#33FF33',
  '#FF33CC',
  '#FF0000',
  '#00FF00',
  '#138d96',
  '#487F77',
  '#F7A31C',
  '#BFA3D1',
  '#E25822',
  '#8DE6B8',
  '#A96E84',
  '#FFC87D',
]

const colors = colorsList.filter((color, index) => colorsList.indexOf(color) === index);

export const getColorForSubject = (secretWord) => {
  let lettersValue = 0;
  if (typeof secretWord !== 'string') {
    secretWord = 'secret';
  }
  for(let char of secretWord) {
    lettersValue += char.charCodeAt();
  }
  
  lettersValue += 996553404406;
  
  const index = lettersValue % colors.length;
  
  return colors[index];
}
