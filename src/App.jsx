import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Button} from "react-bootstrap";
import {Table} from "react-bootstrap";

function App() {
  const [api, setApi] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("localhost:4000");
        const jsonData = await api.json();
        const apartementsData = jsonData.find(
          (item) => item.model === "Apartements"
        ).data.possessions;
        setData(apartementsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      }
    });
    return (
      <div>
        <h1>Liste des Apartements</h1>
        {data ? (
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>price</th>
                        <th>picture</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((p, index) => (
                        <tr key={index}>
                          <td>{p.id}</td>
                          <td>{p.description.toLocaleString()}</td>
                          <td>{(p.price).toLocaleString()}</td>
                          <td>{p.picture}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <p>Chargement des données...</p>
                )}
      </div>
    )
};

export default App;
