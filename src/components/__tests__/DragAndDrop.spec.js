import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DragAndDrop from '../DragAndDrop.vue'
import HeaderList from "../HeaderList.vue"
describe('DragAndDrop', () => {
 it('renders properly', () => {
  const wrapper = mount(DragAndDrop)
  expect(wrapper.html()).toMatchSnapshot();
 })

 it('title checking', () => {
  const wrapper = mount(DragAndDrop)
  expect(wrapper.text()).toContain('Drag and drop list view');
 })

 it('draggable btn checking', () => {
  const wrapper = mount(DragAndDrop)
  expect(wrapper.find('button').exists()).toBe(true);
  expect(wrapper.find('button').attributes('draggable')).toBe("true");
 })
})



describe('Table Header', () => {
 it('renders properly', () => {
  const wrapper = mount(HeaderList)
  const list = wrapper.vm.headers;
 
  wrapper.setValue({ headers:[...list, "to mo"]})
  console.log(wrapper.vm.headers)
  expect(wrapper.html()).toMatchSnapshot();
 })
})