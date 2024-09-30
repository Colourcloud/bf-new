import { NextRequest, NextResponse } from 'next/server';

// Define the structure of the WordPress user data
interface WordPressUser {
  id: number;
  acf: {
    name: string;
    email: string;
    business_name: string;
    website_url: string;
  };
  // Add other properties as needed
}

export async function POST(request: NextRequest) {
  const formData = await request.json();
  const username = process.env.WORDPRESS_USERNAME;
  const applicationPassword = process.env.WORDPRESS_PASSWORD;

  if (!username || !applicationPassword) {
    return NextResponse.json({ success: false, error: 'WordPress credentials are not configured' }, { status: 500 });
  }

  try {
    // Step 1: Fetch all marketing users
    const allUsersResponse = await fetch('https://blog.builtflat.co.nz/wp-json/wp/v2/marketing-user?per_page=100', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(username + ':' + applicationPassword).toString('base64'),
      },
    });

    const allUsers: WordPressUser[] = await allUsersResponse.json();

    // Check if the email already exists
    const emailExists = allUsers.some((user: WordPressUser) => user.acf.email === formData.email);

    if (emailExists) {
      return NextResponse.json({ success: false, error: 'This email address has already been submitted.' }, { status: 400 });
    }

    // Step 2: Proceed with form submission
    const response = await fetch('https://blog.builtflat.co.nz/wp-json/wp/v2/marketing-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(username + ':' + applicationPassword).toString('base64'),
      },
      body: JSON.stringify({
        title: formData.email,
        status: 'publish',
        acf: {
          name: formData.name,
          email: formData.email,
          business_name: formData.business_name,
          website_url: formData.website_url,
        },
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to submit form');
    }

    return NextResponse.json({ success: true, data: responseData });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' }, { status: 500 });
  }
}