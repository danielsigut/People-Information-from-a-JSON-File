fetch('objects.json').then(res => res.json()).then(data => {
  const people = data[0].people;
  people.forEach(function(person){
    let name = person.name;
    let hobby = person.hobby;
    let personality = person.personality;
    let personString = 'My name is ' + name + '. ' + 'I like ' + hobby + '. ' +
    'I consider myself to be ' + personality + '.';
    let h1 = document.createElement('h1');
    h1.innerHTML = personString;
    (function(){
      let div = document.createElement('div');
      div.style.backgroundColor = '#f2f2f2';
      div.style.borderRadius = '2.5%';
      div.append(h1);
      document.body.append(div);
    })();
  });
});
