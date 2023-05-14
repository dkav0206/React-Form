import React, { Component } from 'react'
import FormData from './FormData'
import Table from './Table'


export default class QuanLySV extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='mt-4'>Bài tập quản lý sinh viên</h1>
        <FormData/>
        <Table/>

      </div>
    )
  }
}
