import Select from "react-select";
import { useState, useEffect } from "react";
import pic from "./logofix.png";
import { Link } from "react-router-dom"; 

const data = [
  {
    id: "makamA",
    makam: "Makam A",
    jenazah: [
      {
        id: "1",
        nama: "Makam 1",
        latitude: "-7.6874039",
        longitude: "110.4109641"
        
      },
      {
        id: "2",
        nama: "Makam 2",
        latitude: "-7.6873870",
        longitude: "110.4109711"
      },
      {
        id: "3",
        nama: "Makam 3",
        latitude: "-7.687369533",
        longitude: "110.4109784"
      },
      {
        id: "4",
        nama: "Makam 4",
        latitude: "-7.687354014",
        longitude: "110.4109865"
      },
      {
        id: "5",
        nama: "Makam 5",
        latitude: "-7.687336775",
        longitude: "110.4109935"
      },
      {
        id: "6",
        nama: "Makam 6",
        latitude: "-7.687319522",
        longitude: "110.4110005"
      },
      {
        id: "7",
        nama: "Makam 7",
        latitude: "-7.687302144",
        longitude: "110.4110076"
      },
      {
        id: "8",
        nama: "Makam 8",
        latitude: "-7.687285947",
        longitude: "110.411015"
      },
      {
        id: "9",
        nama: "Makam 9",
        latitude: "-7.687269408",
        longitude: "110.4110223"
      },
      {
        id: "10",
        nama: "Makam 10",
        latitude: "-7.687252733",
        longitude: "110.4110302"
      }

    ]
  },
  {
    id: "makamB",
    makam: "Makam B",
    jenazah: [
      {
        id: "11",
        nama: "Makam 11",
        latitude: "-7.768745872",
        longitude: "110.4011829"
      },
      {
        id: "12",
        nama: "Makam 12",
        latitude: "-7.768735803",
        longitude: "110.4011952"
      },
      {
        id: "13",
        nama: "Makam 13",
        latitude: "-7.768749231",
        longitude: "110.4012025"
      }
    ]
  }
];

export default function App() {
  const [makam, setMakam] = useState(null);
  const [jenazah, setJenazah] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [dataJenazah, setDataJenazah] = useState([]);

  const handleMakamChange = (e) => {
    setMakam(e.value);
  };

  const handleJenazahChange = (e) => {
    setJenazah(e.value);
  };

  const MakamOptions = data.map((data) => {
    return {
      value: data.id,
      label: data.makam
    };
  });

  useEffect(() => {
    const indexData = data.findIndex((data) => data.id === makam);
    if (makam) {
      const dataJenazahBaru = data[indexData].jenazah;
      const jenazahOptions = dataJenazahBaru.map((jenazah) => {
        return {
          value: jenazah.id,
          label: jenazah.nama
        };
      });
      setDataJenazah(jenazahOptions);
    }
  }, [makam]);  //dependency array kapan blok dalam use effect dipanggil ketika makam berubah

  useEffect(() => {
    if (makam && jenazah) {
      const target = data[data.findIndex((data) => data.id === makam)].jenazah
      const dataLokasi = target[target.findIndex((lokasi) => lokasi.id === jenazah)]
      setLatitude(dataLokasi.latitude)
      setLongitude(dataLokasi.longitude)
    }
  },[jenazah])

  return (
    <div className="App">
    Nama Pemakaman :
      <Select
        options={MakamOptions}
        onChange={handleMakamChange}
        value={makam}
      />
      {makam} <br/><br/>
      Nama Jenazah :
      {makam && ( 
        
        <Select 
          options={dataJenazah}
          onChange={handleJenazahChange}
          value={jenazah}
        />

      )}
      {jenazah}
      <br/><br/>
      <Link to={`/map?latitude=${latitude}&longitude=${longitude}`}> 
        <button class="temukan">
            Temukan
        </button>
    </Link>
    <h1 class="logo2">
      <img src={pic}/>
    </h1>
    </div>
  );
}
