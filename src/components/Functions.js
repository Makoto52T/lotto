export const revers3length = (index, badge, numb, top, tod) => {
  console.log (index, badge, numb, top, tod);
  let single = [];
  for (let i = 0; i < numb.length; i++) {
    if (!single.includes (numb[i])) {
      single.push (numb[i]);
    }
  }
  let arr = badge;
  let old = [];
  console.log (arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].numb !== '' && i !== arr.length - 1 && i !== index) {
      old.push (arr[i]);
    }
  }

  if (single.length === 3) {
    return [
      ...old,
      {
        numb: numb,
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        func: 'none',
      },
      {
        numb: numb[0] + '' + numb[2] + '' + numb[1],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        func: 'none',
      },
      {
        numb: numb[1] + '' + numb[2] + '' + numb[0],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        func: 'none',
      },
      {
        numb: numb[1] + '' + numb[0] + '' + numb[2],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        func: 'none',
      },
      {
        numb: numb[2] + '' + numb[0] + '' + numb[1],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        func: 'none',
      },
      {
        numb: numb[2] + '' + numb[1] + '' + numb[0],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        func: 'none',
      },
      {
        numb: '',
        Top: '',
        Bottom: '',
        Tod: '',
        TodDisable: true,
        BottomDisable: false,
        func: 'reverse2numb',
      },
    ];
  } else if (single.length === 2) {
    return [
      ...old,
      {
        numb: numb,
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        func: 'none',
      },
      {
        numb: numb[0] + '' + numb[2] + '' + numb[1],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        func: 'none',
      },
      {
        numb: numb[1] + '' + numb[2] + '' + numb[0],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        func: 'none',
      },
      {
        numb: '',
        Top: '',
        Bottom: '',
        Tod: '',
        TodDisable: true,
        BottomDisable: false,
        func: 'reverse2numb',
      },
    ];
  } else if (single.length === 1) {
    return [
      ...old,
      {
        numb: numb,
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        func: 'none',
      },
      {
        numb: '',
        Top: '',
        Bottom: '',
        Tod: '',
        TodDisable: true,
        BottomDisable: false,
        func: 'reverse2numb',
      },
    ];
  }
};
