export default function menuContent() {
  const row = document.createElement('div');
  row.classList.add('row');
  row.classList.add('mt-2');
  row.classList.add('p-4');
  const menus = [
    [
      'Most popular',
      'Sauce Gnagnan',
    ],
    [
      'Top picked',
      'Alloco',
    ],
    [
      'Our special',
      'Garba',
    ]
  ];
  for (let i = 0; i < menus.length; i++) {
    const shadow = document.createElement('div');
    shadow.classList.add('col-12');
    shadow.classList.add('rounded');
    shadow.classList.add('shadow');
    shadow.classList.add('text-center');
    shadow.classList.add('text-uppercase');
    shadow.classList.add('font-weight-bold');
    shadow.classList.add('p-5');
    shadow.classList.add('m-3');
    row.appendChild(shadow);
    const small = document.createElement('small');
    const p = document.createElement('p');
    [small.innerHTML, p.innerHTML] = menus[i]
    p.classList.add('mt-2');
    shadow.appendChild(small);
    shadow.appendChild(p);
  }

  return row;
};
