import React from 'react'
import { useLocation } from 'react-router-dom'

export default function NoMatch() {
    let location = useLocation();
  
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code> (404)
        </h3>
      </div>
    );
}