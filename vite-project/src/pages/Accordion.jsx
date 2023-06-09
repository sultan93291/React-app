import { useState } from 'react';
import Header from './Header';

export default function Accordion() {
  const [activeIndex, setactiveIndex] = useState('0');

  return (
    <>
      <Header />

      <h2> Sultan , Ahmed </h2>

      <Panel
        title="about"
        isActive={activeIndex === 0}
        onShow={() => {
          setactiveIndex(0);
        }}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>

      <Panel
        title="etomolgy"
        isActive={activeIndex === 1}
        onShow={() => {
          setactiveIndex(1);
        }}
      >
        The name comes from алма, the Kazakh word for "apple" and is often
        translated as "full of apples". In fact, the region surrounding Almaty
        is thought to be the ancestral home of the apple, and the wild Malus
        sieversii is considered a likely candidate for the ancestor of the
        modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({ title, isActive, onShow, children }) {
  return (
    <section className=" Panel">
      <h3> {title} </h3>

      {isActive ? (
        <p> {children} </p>
      ) : (
        <button onClick={onShow}> show </button>
      )}
    </section>
  );
}
