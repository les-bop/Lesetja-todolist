import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from 'react-router-dom';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Sign from './Pages/Sign';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './style.css';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Switch, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';
import React from 'react';
import './style.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import './style.css';
import Form from './comp/Form';
import TodosList from './comp/TodosList';
import DateTime from './comp/DateTime';
import ReactCalendar from './comp/ ReactCalendar';

const styles = {
  borderRadius: '0px',
  height: '550px',
  width: '250px',
  marginLeft: '50px'
};
const styleon = {
  borderRadius: '0px',
  height: '550px',
  width: '452px',
  marginLeft: '120px',
  overflowY: 'scroll'
};
const style = {
  borderRadius: '0px',
  height: '550px',
  width: '220px',
  marginLeft: '271px'
};

export default function Todo() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/signin');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <div>
      <Grid className="mainGrid " container spacing={0}>
        <Grid className="firstinGrid " item xs={2}>
          <Paper style={styles} className="papertwo">
            <input
              style={{
                borderRadius: '5px',
                border: '2px solid #e0e0e0',
                width: '170px',
                height: '30px',
                fontSize: '15px',
                margin: '15px',
                textAlign: 'center'
              }}
              type="text"
              placeholder="search"
            />

            <Typography
              style={{
                color: 'black',
                marginTop: '20px',
                marginRight: '0px',
                marginLeft: '30px',
                textDecoration: 'none'
              }}
            >
              <Link
                to="/"
                style={{
                  color: 'black',
                  marginTop: '720px',
                  marginRight: '60px',
                  marginLeft: '30px',
                  textDecoration: 'none'
                }}
              >
                {' '}
                My Day{' '}
          
              </Link>
            </Typography>

            <Typography
              style={{
                color: 'black',
                marginTop: '20px',
                marginRight: '0px',
                marginLeft: '30px',
                textDecoration: 'none'
              }}
            >
              <Link
                to="/"
                style={{
                  color: 'black',
                  marginTop: '720px',
                  marginRight: '60px',
                  marginLeft: '30px',
                  textDecoration: 'none'
                }}
              >
                {' '}
                Important{' '}
            
              </Link>
            </Typography>

            <Typography
              style={{
                color: 'black',
                marginTop: '20px',
                marginRight: '0px',
                marginLeft: '30px',
                textDecoration: 'none'
              }}
            >
              <Link
                to="/"
                style={{
                  color: 'black',
                  marginTop: '720px',
                  marginRight: '60px',
                  marginLeft: '30px',
                  textDecoration: 'none'
                }}
              >
                {' '}
                Planned{' '}
        
              </Link>
            </Typography>

            <Typography
              style={{
                color: 'black',
                marginTop: '20px',
                marginRight: '0px',
                marginLeft: '9px',
                textDecoration: 'none'
              }}
            >
              <Link
                to="/"
                style={{
                  color: 'black',
                  marginTop: '720px',
                  marginRight: '60px',
                  marginLeft: '50px',
                  textDecoration: 'none'
                }}
              >
                {' '}
                Calender{' '}
            
              </Link>
            </Typography>

            <Typography
              style={{
                color: 'black',
                marginTop: '20px',
                marginRight: '0px',
                marginLeft: '30px',
                textDecoration: 'none'
              }}
            >
              <Link
                to="/"
                style={{
                  color: 'black',
                  marginTop: '720px',
                  marginRight: '60px',
                  marginLeft: '30px',
                  textDecoration: 'none'
                }}
              >
                {' '}
                Notes{' '}
            
              </Link>
            </Typography>

            <Typography
              style={{
                color: 'black',
                marginTop: '230px',
                marginRight: '0px',
                marginLeft: '10px',
                textDecoration: 'none'
              }}
            >
              <Link
                to="/"
                style={{
                  color: '#01579b',
                  marginTop: '720px',
                  marginRight: '60px',
                  marginLeft: '30px',
                  textDecoration: 'none'
                }}
              >
                {' '}
                Add new list{' '}
                
              </Link>
            </Typography>
          </Paper>
        </Grid>

        <Grid className="firstinGrid " item xs={4}>
          {' '}
          <Paper style={styleon} className="paperone">
            <Typography
              style={{
                fontWeight: 'bold',
                fontSize: '30px',
                color: '#FFFFFF',
                marginLeft: '10px'
              }}
            >
              My day{' '}
             
            </Typography>

     

            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
            />
      

      <TodosList todos={todos} setTodos={setTodos} />


          </Paper>
        </Grid>
        <Grid className="firstinGrid " item xs={2}>
          <Paper style={style} className="papertwo">
            <Typography>
              <h2 style={{ marginLeft: '30px' }}>
                {' '}
            
                To do list
              </h2>
            </Typography>
            <Typography
              style={{
                marginLeft: '30px',
                fontSize: '10px',
                color: '#24527a',
                fontWeight: 'bold',
                marginBottom: '50px'
              }}
            >
              {error && <Alert variant="dnager">{error}</Alert>}
              {currentUser.email}
            </Typography>

            

            <Typography
              style={{
                marginTop: '440px',
                marginLeft: '10px',
                textDecoration: 'none'
              }}
            >
              <Link
                to="/signin"
                style={{ color: '#f95959', textDecoration: 'none' }}
              >
                Sign Out
             
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
