import React from 'react'
import PropTypes from 'prop-types'

/* 
  active: will be the state returned by mapStateToProps in FilterLink.
  
  onClick: will be the action creater returned by mapDispatchToProps in 
  Filterlink.
  
  children: will be the the children of the FilterLink component(in this
  case the children are the texts "All", "Active" and "Completed").

  Link is a presentational component that is able to indirectly connect
  to the store because of connect() method in FilterLink.
*/
const Link = ({ active, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
