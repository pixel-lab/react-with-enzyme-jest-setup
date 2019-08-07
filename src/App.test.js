import React from 'react';
import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() })

const setup = (attr={}, state=null) => {
   const wrapper = shallow(<App {...attr} />);
   if(state){
       wrapper.setState(state)
   }
      return wrapper;
}

const containerPanle = setup();


describe('First React component test with Enzyme', () => {
   it('Must have a container panel', () => {      
      expect(
         containerPanle.find('[data-test="counter"]').length
      ).toBe(1);
    });

    it('Must have a button', () => {      
      expect(
         containerPanle.find('[data-test="button"]').length
      ).toBe(1);
    });

    it('State should start with 0', () => {      
      expect(
         containerPanle.state('counter')
      ).toBe(0);
    });

    describe('Buton click',() => {       
      it('Onclick counter must increase by 1', () => { 
         const counter = 7;
         const clickPanel = setup({},{counter});

         console.log(clickPanel);
         //click  button
         const button = clickPanel.find('[data-test="button"]');
         button.simulate('click');
         clickPanel.update();

         //update panel
         const UP = clickPanel.find('[data-test="counter"]');
         expect(UP.text()).toContain(counter+1)
       });
    })

});