// import { useEffect, useState } from "react"


// export default function RandomColor() {


//     const[typeOfColor,setTypeOFColor]=useState('hex');


//     const [color, setColor] = useState('#000000');

//     function RandomColorUtility(length)
//     {
//         return Math.floor(Math.random()*length)

//     }



//     function handleCreateRandomHexColor()
//     {
//         const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//         let hexColor="#";

//         for (let i=0; i<6 ;i++)
//         {
//              hexColor +=hex[RandomColorUtility(hex.length)]
//         }

//        // console.log(hexColor);

//         setColor(hexColor);
//     }

//     function handleCreateRandomRgbColor()
//     {
//         const r=RandomColorUtility(256)
//         const g=RandomColorUtility(256)
//         const b=RandomColorUtility(256)

//         setColor('rgb${r},${g},${b}');

//     }
         

//          useEffect(()=>{
          
//             if(typeOfColor==='rgb') handleCreateRandomRgbColor()
//             else handleCreateRandomHexColor()

//          },[typeOfColor])


//     return <div style={{


//         width: '100vw',
//         height: '100vh',
//         backgroundColor:color,
//     }
//     }>

   

//         <button onClick={()=>setTypeOFColor('hex')}> Create hex color</button>

//         <button  onClick={()=>setTypeOFColor('rgb')}>  gerenare rgb color</button>
//         <button onClick={typeOfColor==='hex'?handleCreateRandomHexColor:handleCreateRandomRgbColor}> Generate random RandomColor</button>

//         <div style={{display:'flex',
                    
//                      justifyContent:'center',
//                      alignItems:'center',
//                      color:'#fff',
//                      fontSize:'60px',
//                      marginTop:'50px',
//                      flexDirection:'column',
//                      gap:'20px'

//                     }}></div>
//                     <h3>{typeOfColor==='rgb'?'Rgb COLOR':'hex color'}</h3>
//                     <h1>{color}</h1>
//     </div>
// }


import { useEffect, useState, useCallback } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOFColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  function RandomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  // Define the color generation functions using useCallback
  const handleCreateRandomHexColor = useCallback(() => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }, []);

  const handleCreateRandomRgbColor = useCallback(() => {
    const r = RandomColorUtility(256);
    const g = RandomColorUtility(256);
    const b = RandomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }, []);

  // Update useEffect with the new useCallback functions
  useEffect(() => {
    if (typeOfColor === 'rgb') {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor, handleCreateRandomHexColor, handleCreateRandomRgbColor]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: color,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: '#fff',
          fontSize: '24px',
          gap: '20px',
          marginTop: '50px'
        }}
      >
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color'}</h3>
        <h1>{color}</h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <button onClick={() => setTypeOFColor('hex')}>Create Hex Color</button>
        <button onClick={() => setTypeOFColor('rgb')}>Generate RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>
          Generate Random Color
        </button>
      </div>
    </div>
  );
}
