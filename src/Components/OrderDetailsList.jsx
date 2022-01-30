import React from 'react';
import Btn from "../Ui/Btn";
import List from "../Components/item";


const OrderDetailsList = (props) => {

    const nextStep = () => {
        props.nextStep()
    }

  return (
      <React.Fragment>
          <div className="w-3/6">
              {props.orderList.map((item, index) => {
                  return (
                      <List
                          key={index}
                          name={item.name}
                          dis={item.dis}
                          price={item.price}
                      />
                  );
              })}
          </div>
          {props.totalPrice ? (
              <Btn click={nextStep} className="mt-10 rounded-3xl uppercase">
                  next
              </Btn>
          ) : null}
      </React.Fragment>
  );
}


export default OrderDetailsList;