import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Settings as SettingsIcon } from 'lucide-react';

const Navigation = () => {
  return (
    <Link to="/settings">
      <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
        <SettingsIcon className="h-5 w-5" />
        <span className="sr-only">Settings</span>
      </Button>
    </Link>
  );
};

export default Navigation; 