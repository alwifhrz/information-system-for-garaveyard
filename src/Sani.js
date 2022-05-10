import Select from "react-select";
import { useState, useEffect } from "react";

const data = [
  {
    id: "makamA",
    makam: "Makam A",
    jenazah: [
      {
        id: "1",
        nama: "Nusantara",
        latitude: "-7.687403806",
        longitude: "110.4109642"
        
      },
      {
        id: "2",
        nama: "Bali",
        latitude: "-7.687386975",
        longitude: "110.4109711"
      },
      {
        id: "3",
        nama: "Jogja",
        latitude: "-7.687369533",
        longitude: "110.4109784"
      },
      {
        id: "4",
        nama: "Semarang",
        latitude: "-7.687354014",
        longitude: "110.4109865"
      },
      {
        id: "5",
        nama: "Kendal",
        latitude: "-7.687336775",
        longitude: "110.4109935"
      },
      {
        id: "6",
        nama: "Solo",
        latitude: "-7.687319522",
        longitude: "110.4110005"
      },
      {
        id: "7",
        nama: "Jakarta",
        latitude: "-7.687302144",
        longitude: "110.4110076"
      },
      {
        id: "8",
        nama: "Padang",
        latitude: "-7.687285947",
        longitude: "110.411015"
      },
      {
        id: "9",
        nama: "Aceh",
        latitude: "-7.687269408",
        longitude: "110.4110223"
      },
      {
        id: "10",
        nama: "Magelang",
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
        nama: "Banten",
        latitude: "-7.768745872",
        longitude: "110.4011829"
      },
      {
        id: "12",
        nama: "Ponorogo",
        latitude: "-7.768735803",
        longitude: "110.4011952"
      },
      {
        id: "13",
        nama: "Papua",
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
  }, [makam]);

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
    Nama Pemakaman
      <Select
        options={MakamOptions}
        onChange={handleMakamChange}
        value={makam}
      />
      {makam}
      {makam && (
        
        <Select
          options={dataJenazah}
          onChange={handleJenazahChange}
          value={jenazah}
        />
      )}
      {jenazah}
      <a href={`/map?latitude=${latitude}&longitude=${longitude}`}>
        <button >
            Temukan
        </button>
    </a>
    </div>
  );
}
