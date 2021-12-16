import React, { Component } from 'react';
import './styles.css';

export default function Card(props: any){
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        </div>
      </div>
  )
}