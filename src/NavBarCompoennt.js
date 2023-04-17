export default function NavBarCompoennt(props){
  // props.score='90/4' //not possible to change
  //props are read-only
  //is not mutable or immutable
    return (
     
       <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<div class="navbar">
  <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
  <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
  <a href="#"><i class="fa fa-fw fa-envelope"></i> {props.tdy}---{props.score}</a>
  <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
</div>
       </div>
    )
}

// export default NavBarCompoennt ;