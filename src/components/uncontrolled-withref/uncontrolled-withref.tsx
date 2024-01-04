import React, { FC } from 'react';
import './uncontrolled-withref.css';

interface UncontrolledWithrefProps {}

const UncontrolledWithref: FC<UncontrolledWithrefProps> = () => (
  <div className="uncontrolled-withref" data-testid="UncontrolledWithref">
    UncontrolledWithref Component
  </div>
);

export default UncontrolledWithref;
