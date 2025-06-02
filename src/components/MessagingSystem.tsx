
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Search, Phone, Video, MoreVertical, Paperclip } from 'lucide-react';

const MessagingSystem = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Lagos Prime Developments',
      role: 'Developer',
      avatar: '/placeholder.svg',
      lastMessage: 'The construction is proceeding on schedule. We expect to complete Phase 1 by Q3.',
      timestamp: '2 hours ago',
      unread: 2,
      online: true,
      property: 'Victoria Island Premium Tower'
    },
    {
      id: 2,
      name: 'Coastal Real Estate',
      role: 'Developer',
      avatar: '/placeholder.svg',
      lastMessage: 'Thank you for your investment. Here are the latest progress photos.',
      timestamp: '1 day ago',
      unread: 0,
      online: false,
      property: 'Lekki Phase 1 Residences'
    },
    {
      id: 3,
      name: 'Elite Properties Nigeria',
      role: 'Developer',
      avatar: '/placeholder.svg',
      lastMessage: 'The quarterly dividend will be distributed next week.',
      timestamp: '3 days ago',
      unread: 1,
      online: true,
      property: 'Ikoyi Luxury Apartments'
    },
    {
      id: 4,
      name: 'IntlJV Support',
      role: 'Support',
      avatar: '/placeholder.svg',
      lastMessage: 'Your KYC verification has been approved. You can now access all features.',
      timestamp: '1 week ago',
      unread: 0,
      online: true,
      property: null
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 2,
      senderName: 'Lagos Prime Developments',
      content: 'Good morning! I wanted to update you on the Victoria Island Premium Tower project.',
      timestamp: '10:30 AM',
      type: 'text'
    },
    {
      id: 2,
      senderId: 1,
      senderName: 'You',
      content: 'Thank you for the update. How is the construction progressing?',
      timestamp: '10:35 AM',
      type: 'text'
    },
    {
      id: 3,
      senderId: 2,
      senderName: 'Lagos Prime Developments',
      content: 'We\'ve completed 67% of the foundation work. The structural engineers are very pleased with the progress.',
      timestamp: '10:40 AM',
      type: 'text'
    },
    {
      id: 4,
      senderId: 2,
      senderName: 'Lagos Prime Developments',
      content: 'construction-progress.jpg',
      timestamp: '10:41 AM',
      type: 'image'
    },
    {
      id: 5,
      senderId: 1,
      senderName: 'You',
      content: 'Excellent progress! When do you expect to reach the next milestone?',
      timestamp: '11:15 AM',
      type: 'text'
    },
    {
      id: 6,
      senderId: 2,
      senderName: 'Lagos Prime Developments',
      content: 'The construction is proceeding on schedule. We expect to complete Phase 1 by Q3.',
      timestamp: '2:30 PM',
      type: 'text'
    }
  ];

  const currentConversation = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-[600px] flex bg-navy-950 rounded-lg overflow-hidden">
      {/* Conversations List */}
      <div className="w-80 border-r border-navy-700">
        <div className="p-4 border-b border-navy-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search conversations..."
              className="pl-10 bg-navy-800 border-navy-700 text-slate-50"
            />
          </div>
        </div>
        
        <ScrollArea className="h-[calc(600px-73px)]">
          <div className="p-2">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedConversation === conversation.id
                    ? 'bg-gold-500/10 border border-gold-500/30'
                    : 'hover:bg-navy-800/50'
                }`}
                onClick={() => setSelectedConversation(conversation.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conversation.avatar} />
                      <AvatarFallback className="bg-navy-700 text-slate-300">
                        {conversation.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-navy-950"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-50 truncate">
                        {conversation.name}
                      </p>
                      <div className="flex items-center space-x-2">
                        {conversation.unread > 0 && (
                          <Badge className="bg-gold-500 text-navy-950 text-xs px-1.5 py-0.5">
                            {conversation.unread}
                          </Badge>
                        )}
                        <span className="text-xs text-slate-400">{conversation.timestamp}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-slate-400 truncate">
                        {conversation.lastMessage}
                      </p>
                    </div>
                    
                    {conversation.property && (
                      <Badge variant="outline" className="mt-2 text-xs border-navy-600 text-slate-400">
                        {conversation.property}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {currentConversation && (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-navy-700 bg-navy-900/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={currentConversation.avatar} />
                    <AvatarFallback className="bg-navy-700 text-slate-300">
                      {currentConversation.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-slate-50">{currentConversation.name}</h3>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-xs border-navy-600 text-slate-400">
                        {currentConversation.role}
                      </Badge>
                      {currentConversation.online && (
                        <span className="text-xs text-green-400">● Online</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-gold-400">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-gold-400">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-gold-400">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderName === 'You' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.senderName === 'You'
                          ? 'bg-gold-500 text-navy-950'
                          : 'bg-navy-800 text-slate-50'
                      }`}
                    >
                      {message.type === 'image' ? (
                        <div className="space-y-2">
                          <div className="h-32 bg-navy-700 rounded flex items-center justify-center">
                            <span className="text-slate-400 text-sm">{message.content}</span>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm">{message.content}</p>
                      )}
                      <p className={`text-xs mt-1 ${
                        message.senderName === 'You' ? 'text-navy-700' : 'text-slate-400'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-navy-700">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-gold-400">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <div className="flex-1 relative">
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-navy-800 border-navy-700 text-slate-50 pr-12"
                  />
                </div>
                <Button 
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-gold-500 hover:bg-gold-600 text-navy-950"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MessagingSystem;
