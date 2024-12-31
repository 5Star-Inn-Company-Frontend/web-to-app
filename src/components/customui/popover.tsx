import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


interface BasicPopoverProps {
    handleDeleteApp: () => void;
}

export default function BasicPopover({handleDeleteApp}: BasicPopoverProps) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
        {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}> */}
            <i aria-describedby={id} onClick={handleClick} className="fa-solid fa-ellipsis" style={{rotate:"90deg", fontSize:"25px", cursor:"pointer"}}></i>
        {/* </Button> */}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 1 }}><p style={{fontWeight:"400", fontSize:"11px",display:"flex", alignItems:"center", gap:"5px", cursor:"pointer"}}><i className="fa-solid fa-share-from-square"></i> Public Sharing Link</p></Typography>
          <Typography sx={{ p: 1 }}><p style={{fontWeight:"400", fontSize:"11px",display:"flex", alignItems:"center", gap:"5px", cursor:"pointer"}}><i className="fa-solid fa-copy"></i> Clone to New App</p></Typography>
          <Typography sx={{ p: 1 }}><p style={{fontWeight:"400", fontSize:"11px",display:"flex", alignItems:"center", gap:"5px", cursor:"pointer"}}><i className="fa-solid fa-copy"></i> Import from Existing App</p></Typography>
          <Typography sx={{ p: 1 }}><p style={{fontWeight:"400", fontSize:"11px",display:"flex", alignItems:"center", gap:"5px", cursor:"pointer"}}><i className="fa-solid fa-user-gear"></i> Manage App Access</p></Typography>
          <Typography sx={{ p: 1 }}><p style={{fontWeight:"400", fontSize:"11px",display:"flex", alignItems:"center", gap:"5px", cursor:"pointer"}}><i className="fa-solid fa-money-bill-transfer"></i>Transfer Organization</p></Typography>
          <Typography onClick={handleDeleteApp} sx={{ p: 1 }}><p style={{fontWeight:"400", fontSize:"11px",display:"flex", alignItems:"center", gap:"5px", cursor:"pointer"}}><i className="fa-solid fa-trash-can"></i> Delete App</p></Typography>
        </Popover>
      </div>
    );
  }