import React, { useState } from 'react';
import Image from 'next/image';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Updated WelcomeProps to reflect Giacomo Mantovani's personal recruiter chatbot and remove interests state
interface WelcomeProps {
  disabled: boolean;
  startButtonText: string;
  onStartCall: (language: string) => void;
}

export const Welcome = ({
  disabled,
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeProps) => {
  const [language, setLanguage] = useState('EN');

  return (
    <div
      ref={ref}
      inert={disabled}
      className="fixed inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-black/20 to-black/60 p-4"
    >
      <div
        className="w-full max-w-[520px] rounded-[var(--radius)] bg-[var(--card)] p-7 text-center shadow-xl backdrop-blur-sm"
        aria-label="Custom Welcome Card"
      >
        <div className="mb-4 flex flex-row items-center justify-center gap-4">
          <Image
            src="/avatar.jpg" // Placeholder path for the image
            alt="Giacomo Mantovani"
            width={96}
            height={96}
            className="mt-4 rounded-full"
          />
          <DotLottieReact className="h-12 w-12" src="QF46mfY3QD.lottie" loop autoplay />
        </div>
        <p className="text-fg1 mb-2 max-w-prose pt-1 leading-6 font-medium">
          Let&apos;s start a chat with Giacomo Mantovani!
        </p>
        <p className="text-fg1 mb-4 max-w-prose text-[0.95rem] leading-6 font-semibold">
          (I&apos;ll personally answer 24/7, definitely not an AI. 😉)
        </p>
        <div className="justyfy-center flex flex-row items-center justify-center gap-4">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="mb-4 w-full max-w-[120px] rounded-full">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EN">English</SelectItem>
              <SelectItem value="IT">Italian</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          variant="primary"
          size="lg"
          onClick={() => onStartCall(language)}
          className="mt-4 w-full max-w-[420px] rounded-full"
        >
          {startButtonText}
        </Button>
      </div>
    </div>
  );
};
