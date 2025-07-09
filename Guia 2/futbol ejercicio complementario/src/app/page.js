import styles from "./page.module.css";

const equiposData = [
  {
    id: 1,
    nombre: "Real Madrid",
    plantilla: [
      {
        id: 1,
        nombre: "Eden Hazard",
        Altura: "1.75",
        Peso: "74Kg",
        foto: "https://news.22bet.com/wp-content/uploads/2019/05/p42786.png"
      },
      {
        id: 2,
        nombre: "Karim Benzema",
        Altura: "1.85",
        Peso: "81Kg",
        foto: "https://s.france24.com/media/display/ceebcc02-6e4f-11ee-9d46-005056a90321/w:1280/p:1x1/000_33R36HD.jpg"
      }
    ]
  },
  {
    id: 2,
    nombre: "Barcelona",
    plantilla: [
      {
        id: 1,
        nombre: "Gavi",
        Altura: "1.75",
        Peso: "68Kg",
        foto: "https://cdn.vox-cdn.com/thumbor/tfgQXI9WPjMQ7iB7fmFK5owV0e0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24585147/1481368389.jpg"
      },
      {
        id: 2,
        nombre: "Frenkie de Jong",
        Altura: "1.80",
        Peso: "74Kg",
        foto: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/DE%20JONG-min.jpg"
      }
    ]
  }
];

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul className={styles.grid}>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.card} key={jugador.id}>
                <img
                  src={jugador.foto}
                  alt={`Foto de ${jugador.nombre}`}
                  className={styles.avatar}
                />
                <strong>{jugador.nombre}</strong>
                <p>Altura: {jugador.Altura}m</p>
                <p>Peso: {jugador.Peso}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.header}>Mejores jugadores</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
