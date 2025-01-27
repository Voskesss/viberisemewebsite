interface WaitlistResponse {
  success: boolean;
  message?: string;
  error?: string;
  position?: number;
  referralLink?: string;
  userGroup?: string;
}

export async function joinWaitlist(email: string, userGroup: string): Promise<WaitlistResponse> {
  try {
    // Maak een unieke referral link
    const referralLink = new URL(import.meta.env.VITE_WEBSITE_URL);
    referralLink.searchParams.set('ref', email);

    const response = await fetch('https://api.getwaitlist.com/api/v1/waiter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_WAITLIST_API_KEY}`
      },
      body: JSON.stringify({
        email,
        waitlist_id: import.meta.env.VITE_WAITLIST_ID,
        referral_link: referralLink.toString(),
        metadata: {
          userGroup,
          registrationDate: new Date().toISOString(),
          source: document.referrer || 'direct'
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Er is iets misgegaan');
    }

    return {
      success: true,
      position: data.position,
      referralLink: data.referral_link,
      userGroup
    };
  } catch (error) {
    console.error('Waitlist error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Er is iets misgegaan'
    };
  }
}
