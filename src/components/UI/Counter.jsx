import "../../Style/counter.css";

const counterData = [
  {
    number: "5K",
    text: "Clients",
  },
  {
    number: 350,
    text: "Clients",
  },
  {
    number: 50,
    text: "Project Completed",
  },
];
const Counter = () => {
  return (
    <section className="counter" id="projects">
      <div className="container">
        <div className="counter__wrapper">
          {counterData.map((item, index) => {
            return (
              <div key={index} className="counter__item">
                <h3 className="counter__number">{item.number}+</h3>
                <h4 className="counter__title">{item.text}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Counter;
