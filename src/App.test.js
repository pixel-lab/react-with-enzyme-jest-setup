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

const findFunction = (wrapper, element) => {
   return wrapper.find(`[data-test="${element}"]`)
}
describe('First React component test with Enzyme', () => {
   it('Must have a container panel', () => {      
      const containerPanle = setup();
      expect(
         findFunction(containerPanle,'counter').length
      ).toBe(1);
    });
    it('State should start with 0', () => {
      const containerPanle = setup();      
      expect(
         containerPanle.state('counter')
      ).toBe(0);
    });

    it('No error', () => {
      const containerPanle = setup();      
      expect(
         findFunction(containerPanle,'error').length
      ).toBe(0);
    });

    describe('increment button',() => { 
        it('Must have a button', () => {  
            const containerPanle = setup();    
            expect(
               findFunction(containerPanle,'increment').length
            ).toBe(1);
         });      
         it('increment counter must increase by 1', () => {          
            const counter = 7;
            const clickPanel = setup({},{counter});
            const button = findFunction(clickPanel,'increment');
            button.simulate('click');
            clickPanel.update();

            //update panel
            const UP = findFunction(clickPanel,'counter');
            expect(UP.text()).toContain(counter+1)
         });
        
    });

    describe('decrement button config', () => {
         it('must have a decrement button' , () => {
            const containerPanle = setup(); 
            expect(findFunction(containerPanle,'decrement').length).toBe(1)
         });
         it('Click decrease the counter by 1' , () => {
            const counter = 7;
            const containerPanle = setup({},{counter});
            const button = findFunction(containerPanle,'decrement');
            button.simulate('click');
            containerPanle.update();

            const UP = findFunction(containerPanle,'counter');
            expect(UP.text()).toContain(counter-1);
         });
         describe('Decrement error', () =>{           

            let wrapper
            beforeEach(() => {
               // no need to set counter value here; default value of 0 is good
               wrapper = setup();

               // find button and click
               const button = findFunction(wrapper,'decrement');
               button.simulate('click');
               wrapper.update();
            });

            it('should show the error', () => {
               expect(
                  findFunction(wrapper,'error').length
               ).toBe(1);
            });

            it('counter should be stays 0', () => {
               expect(
                  wrapper.state().counter
               ).toBe(0);
            });

            it('On crement should increase value', () => {
               const button = findFunction(wrapper,'increment');
               button.simulate('click');
               wrapper.update();
               expect(
                  findFunction(wrapper,'error').length
               ).toBe(0);
            })
         })
    });

});