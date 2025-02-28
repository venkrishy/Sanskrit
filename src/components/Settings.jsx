import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from 'sonner'

const Settings = () => {
  const [apiKeys, setApiKeys] = useState({
    openai: '',
    claude: '',
    groq: ''
  })

  useEffect(() => {
    try {
      const savedKeys = {
        openai: localStorage.getItem('openai_api_key') || '',
        claude: localStorage.getItem('claude_api_key') || '',
        groq: localStorage.getItem('groq_api_key') || ''
      }
      setApiKeys(savedKeys)
    } catch (error) {
      console.error('Error loading API keys:', error)
      toast.error('Failed to load saved API keys')
    }
  }, [])

  const handleSave = () => {
    try {
      localStorage.setItem('openai_api_key', apiKeys.openai)
      localStorage.setItem('claude_api_key', apiKeys.claude)
      localStorage.setItem('groq_api_key', apiKeys.groq)
      toast.success('API keys saved successfully!')
    } catch (error) {
      console.error('Error saving API keys:', error)
      toast.error('Failed to save API keys')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="openai" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              OpenAI API Key
            </label>
            <Input
              id="openai"
              type="password"
              value={apiKeys.openai}
              onChange={(e) => setApiKeys({ ...apiKeys, openai: e.target.value })}
              placeholder="Enter OpenAI API key"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="claude" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Claude API Key
            </label>
            <Input
              id="claude"
              type="password"
              value={apiKeys.claude}
              onChange={(e) => setApiKeys({ ...apiKeys, claude: e.target.value })}
              placeholder="Enter Claude API key"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="groq" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              GROQ API Key
            </label>
            <Input
              id="groq"
              type="password"
              value={apiKeys.groq}
              onChange={(e) => setApiKeys({ ...apiKeys, groq: e.target.value })}
              placeholder="Enter GROQ API key"
            />
          </div>

          <Button 
            className="w-full mt-6" 
            onClick={handleSave}
          >
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Settings 