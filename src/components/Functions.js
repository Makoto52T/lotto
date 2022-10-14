export const revers3length = (index, badge, val) => {
  let numb = val.numb;
  let top = val.Top;
  let tod = val.Tod;

  let single = [];
  for (let i = 0; i < numb.length; i++) {
    if (!single.includes (numb[i])) {
      single.push (numb[i]);
    }
  }
  let set = 0;
  for (let i = 0; i < badge.length; i++) {
    if (badge[i].set > set) {
      set = badge[i].set;
    }
    if (i === badge.length - 1) {
      set = set + 1;
    }
  }

  let arr = badge;
  let old = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].numb !== '' && i !== arr.length - 1 && i !== index) {
      old.push (arr[i]);
    }
  }

  if (single.length === 3) {
    let data = [
      ...old,
      {
        numb: numb,
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        reverse: true,
        set: set,
      },
      {
        numb: numb[0] + '' + numb[2] + '' + numb[1],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        reverse: true,
        set: set,
      },
      {
        numb: numb[1] + '' + numb[2] + '' + numb[0],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        reverse: true,
        set: set,
      },
      {
        numb: numb[1] + '' + numb[0] + '' + numb[2],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        reverse: true,
        set: set,
      },
      {
        numb: numb[2] + '' + numb[0] + '' + numb[1],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        reverse: true,
        set: set,
      },
      {
        numb: numb[2] + '' + numb[1] + '' + numb[0],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        reverse: true,
        set: set,
      },
      {
        numb: '',
        Top: '',
        Bottom: '',
        Tod: '',
        TodDisable: true,
        BottomDisable: false,
        reverse: false,
        set: 0,
      },
    ];
    console.log (data);
    return data;
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
        reverse: true,
        set: set,
      },
      {
        numb: numb[0] + '' + numb[2] + '' + numb[1],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        reverse: true,
        set: set,
      },
      {
        numb: numb[1] + '' + numb[2] + '' + numb[0],
        Top: top,
        Bottom: 0,
        Tod: tod,
        TodDisable: false,
        BottomDisable: true,
        reverse: true,
        set: set,
      },
      {
        numb: '',
        Top: '',
        Bottom: '',
        Tod: '',
        TodDisable: true,
        BottomDisable: false,
        reverse: false,
        set: 0,
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
        reverse: true,
        set: set,
      },
      {
        numb: '',
        Top: '',
        Bottom: '',
        Tod: '',
        TodDisable: true,
        BottomDisable: false,
        reverse: false,
        set: 0,
      },
    ];
  }
};

export const revers2length = (input, index, badge) => {
  let arr = [];
  let set = 0;
  for (let i = 0; i < badge.length; i++) {
    if (badge[i].set > set) {
      set = badge[i].set;
    }
    if (i === badge.length - 1) {
      set = set + 1;
    }
  }
  for (let i = 0; i < badge.length; i++) {
    if (i < index) {
      arr.push ({
        numb: badge[i].numb,
        Top: badge[i].Top,
        Bottom: badge[i].Bottom,
        Tod: badge[i].Tod,
        TodDisable: badge[i].TodDisable,
        BottomDisable: badge[i].BottomDisable,
        reverse: badge[i].reverse,
        set: badge[i].set,
      });
    } else if (i === index) {
      arr.push ({
        numb: badge[i].numb,
        Top: badge[i].Top,
        Bottom: badge[i].Bottom,
        Tod: badge[i].Tod,
        TodDisable: badge[i].TodDisable,
        BottomDisable: badge[i].BottomDisable,
        reverse: true,
        set: set,
      });
      arr.push ({
        numb: input.numb[1] + '' + input.numb[0],
        Top: input.Top,
        Bottom: input.Bottom,
        Tod: input.Tod,
        TodDisable: input.TodDisable,
        BottomDisable: input.BottomDisable,
        reverse: true,
        set: set,
      });
    } else {
      if (arr.length === 5) {
        if (arr[arr.length - 1].numb !== '') {
          arr.push ({
            numb: badge[i].numb,
            Top: badge[i].Top,
            Bottom: badge[i].Bottom,
            Tod: badge[i].Tod,
            TodDisable: badge[i].TodDisable,
            BottomDisable: badge[i].BottomDisable,
            reverse: badge[i].reverse,
            set: badge[i].set,
          });
        }
      } else {
        if (arr.length < 5) {
          arr.push ({
            numb: badge[i].numb,
            Top: badge[i].Top,
            Bottom: badge[i].Bottom,
            Tod: badge[i].Tod,
            TodDisable: badge[i].TodDisable,
            BottomDisable: badge[i].BottomDisable,
            reverse: badge[i].reverse,
            set: badge[i].set,
          });
        }
      }
    }
    if (i === badge.length - 1) {
      return arr;
    }
  }
};

export const setZero = (badge, set, index, input) => {
  for (let i = 0; i < badge.length; i++) {
    console.log (badge[i]);
    if (i === index || badge[i].set === set) {
      badge[i] = {
        numb: i === index ? input : badge[i].numb,
        Top: badge[i].Top,
        Bottom: badge[i].Bottom,
        Tod: badge[i].Tod,
        TodDisable: badge[i].TodDisable,
        BottomDisable: badge[i].BottomDisable,
        reverse: false,
        set: 0,
      };
    } else if (i > index) {
      badge[i] = {
        numb: i === index ? input : badge[i].numb,
        Top: badge[i].Top,
        Bottom: badge[i].Bottom,
        Tod: badge[i].Tod,
        TodDisable: badge[i].TodDisable,
        BottomDisable: badge[i].BottomDisable,
        reverse: false,
        set: badge[i].set - 1 < 0 ? 0 : badge[i].set - 1,
      };
    }
    if (i === badge.length - 1) {
      return badge;
    }
  }
};

export const doo19 = (badge, index) => {
  let numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let start = badge[index].numb;
  let arr = [];
  for (let i = 0; i < badge.length; i++) {
    if (i < index && badge[i].numb !== '') {
      arr.push (badge[i]);
    } else {
      for (let j = 0; j < numb.length; j++) {
        arr.push ({
          numb: badge[i].numb + '' + numb[j],
          Top: badge[i].Top,
          Bottom: badge[i].Bottom,
          Tod: badge[i].Tod,
          TodDisable: badge[i].TodDisable,
          BottomDisable: badge[i].BottomDisable,
          reverse: false,
          set: 0,
        });
      }
      for (let j = numb.length - 1; j >= 0; j--) {
        if (numb[j] !== Number (badge[i].numb))
          arr.push ({
            numb: numb[j] + '' + badge[i].numb,
            Top: badge[i].Top,
            Bottom: badge[i].Bottom,
            Tod: badge[i].Tod,
            TodDisable: badge[i].TodDisable,
            BottomDisable: badge[i].BottomDisable,
            reverse: false,
            set: 0,
          });
        if (j === 0) {
          return arr;
        }
      }
    }
  }
};

export const CheckNumb = data => {
  // console.log (data);
  if (data !== undefined) {
    let read = [];
    let e = [];
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (i === 0) {
        read.push (data[i].numb);
        arr.push (data[i]);
      } else if (!read.includes (data[i].numb)) {
        read.push (data[i].numb);
        arr.push (data[i]);
      }
    }
    return arr;
  }
};

export const summaryPrice = badge => {
  let top = 0;
  let down = 0;
  let tod = 0;
  for (let i = 0; i < badge.length; i++) {
    top += badge[i].Top;
    down += badge[i].Bottom;
    tod += badge[i].Tod;
    if (i === badge.length - 1) {
      return {top, down, tod};
    }
  }
};
