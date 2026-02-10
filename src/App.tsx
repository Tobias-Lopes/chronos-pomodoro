// PascalCase
// App

import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Ola Mundo!!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quae neque
        minima? Blanditiis, non ea, atque est vero quia eos, asperiores maxime
        maiores repellendus nemo eum laboriosam modi odit obcaecati.
      </p>
    </>
  );
}
