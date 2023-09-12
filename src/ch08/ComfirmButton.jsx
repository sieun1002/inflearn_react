//Class 컴포넌트

// import React from "react";

//bind 사용
// class ConfirmButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       inConfirmed: false,
//     };

//     this.handleConfirm = this.handleConfirm.bind(this);
//   }

//   handleConfirm() {
//     this.setState((prevState) => ({
//       isConfirmed: !prevState.isConfirmed,
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleConfirm} disable={this.state.isConfirmed}>
//         {this.state.isConfirmed ? "확인됨" : "확인하기"}
//       </button>
//     );
//   }
// }

// //Class fields syntax 사용
// class ConfirmButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       inConfirmed: false,
//     };
//   }

//   handleConfirm = () => {
//     this.setState((prevState) => ({
//       isConfirmed: !prevState.isConfirmed,
//     }));
//   };

//   render() {
//     return (
//       <button onClick={this.handleConfirm} disable={this.state.isConfirmed}>
//         {this.state.isConfirmed ? "확인됨" : "확인하기"}
//       </button>
//     );
//   }
// }

//function 컴포넌트 사용
import React, { useState } from "react";

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ConfirmButton;
