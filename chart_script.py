import pandas as pd
import plotly.graph_objects as go
from plotly.subplots import make_subplots

# Create the data
data = [
    {
        "Platform": "Vercel",
        "Free Tier": "100GB BW, 1k builds",
        "Ease of Deploy": 5,
        "Build Speed": 5,
        "Global CDN": "Yes",
        "Serverless Functions": "Yes", 
        "Database Integration": "Limited",
        "Best Use Case": "Next.js, React",
        "Pricing": "$20/mo Pro"
    },
    {
        "Platform": "Netlify", 
        "Free Tier": "100GB BW, 300min",
        "Ease of Deploy": 5,
        "Build Speed": 4,
        "Global CDN": "Yes", 
        "Serverless Functions": "Yes",
        "Database Integration": "Limited",
        "Best Use Case": "JAMstack, static",
        "Pricing": "$19/mo Pro"
    },
    {
        "Platform": "Railway",
        "Free Tier": "$5 credit/mo",
        "Ease of Deploy": 4,
        "Build Speed": 4,
        "Global CDN": "No",
        "Serverless Functions": "No",
        "Database Integration": "Yes", 
        "Best Use Case": "Full-stack, DB",
        "Pricing": "$5/mo starter"
    },
    {
        "Platform": "Render",
        "Free Tier": "750hrs, sleep",
        "Ease of Deploy": 4,
        "Build Speed": 3,
        "Global CDN": "Yes",
        "Serverless Functions": "No",
        "Database Integration": "Yes",
        "Best Use Case": "Docker, APIs",
        "Pricing": "$7/mo starter"
    },
    {
        "Platform": "Fly.io",
        "Free Tier": "3 VMs, 160GB",
        "Ease of Deploy": 3,
        "Build Speed": 4,
        "Global CDN": "Yes",
        "Serverless Functions": "No", 
        "Database Integration": "Yes",
        "Best Use Case": "Edge, Docker",
        "Pricing": "$1.94/mo basic"
    },
    {
        "Platform": "Firebase",
        "Free Tier": "10GB, 1GB/day",
        "Ease of Deploy": 4,
        "Build Speed": 4,
        "Global CDN": "Yes",
        "Serverless Functions": "Yes",
        "Database Integration": "Yes",
        "Best Use Case": "Google, realtime",
        "Pricing": "Pay-as-you-go"
    }
]

df = pd.DataFrame(data)

# Create subplots
fig = make_subplots(
    rows=1, cols=2,
    subplot_titles=('Performance Scores', 'Feature Availability'),
    specs=[[{"secondary_y": False}, {"secondary_y": False}]],
    column_widths=[0.5, 0.5]
)

# Add Ease of Deploy bars to first subplot
fig.add_trace(
    go.Bar(
        name='Ease Deploy',
        y=df['Platform'],
        x=df['Ease of Deploy'],
        orientation='h',
        marker_color='#1FB8CD',
        text=df['Ease of Deploy'],
        textposition='auto',
        offsetgroup=1,
        width=0.35,
        hovertemplate='<b>%{y}</b><br>Ease Deploy: %{x}/5<br>Free Tier: %{customdata[0]}<br>Use Case: %{customdata[1]}<br>Pricing: %{customdata[2]}<extra></extra>',
        customdata=list(zip(df['Free Tier'], df['Best Use Case'], df['Pricing']))
    ),
    row=1, col=1
)

# Add Build Speed bars to first subplot
fig.add_trace(
    go.Bar(
        name='Build Speed',
        y=df['Platform'],
        x=df['Build Speed'],
        orientation='h',
        marker_color='#DB4545',
        text=df['Build Speed'],
        textposition='auto',
        offsetgroup=2,
        width=0.35,
        hovertemplate='<b>%{y}</b><br>Build Speed: %{x}/5<br>Free Tier: %{customdata[0]}<br>Use Case: %{customdata[1]}<br>Pricing: %{customdata[2]}<extra></extra>',
        customdata=list(zip(df['Free Tier'], df['Best Use Case'], df['Pricing']))
    ),
    row=1, col=1
)

# Create feature matrix for second subplot
features = ['Global CDN', 'Serverless Functions', 'Database Integration']
feature_matrix = []
feature_colors = []

for _, row in df.iterrows():
    row_features = []
    row_colors = []
    for feature in features:
        if row[feature] == 'Yes':
            row_features.append('✓')
            row_colors.append('#2E8B57')  # Green
        elif row[feature] == 'Limited':
            row_features.append('~')
            row_colors.append('#D2BA4C')  # Yellow
        else:
            row_features.append('✗')
            row_colors.append('#DB4545')  # Red
    feature_matrix.append(row_features)
    feature_colors.append(row_colors)

# Add feature availability as text annotations
for i, platform in enumerate(df['Platform']):
    for j, feature in enumerate(features):
        symbol = feature_matrix[i][j]
        color = feature_colors[i][j]
        
        fig.add_annotation(
            x=j,
            y=i,
            text=symbol,
            showarrow=False,
            font=dict(size=20, color=color),
            xref=f"x{2}",
            yref=f"y{2}"
        )

# Update layout
fig.update_layout(
    title="Web Deploy Platform Comparison",
    barmode='group',
    bargap=0.2,
    bargroupgap=0.1,
    legend=dict(orientation='h', yanchor='bottom', y=1.1, xanchor='center', x=0.25),
    height=500
)

# Update x-axes
fig.update_xaxes(title_text="Score (1-5)", range=[0, 5.5], row=1, col=1)
fig.update_xaxes(title_text="Features", tickmode='array', 
                 tickvals=[0, 1, 2], 
                 ticktext=['CDN', 'Serverless', 'Database'],
                 range=[-0.5, 2.5], row=1, col=2)

# Update y-axes
fig.update_yaxes(title_text="Platforms", row=1, col=1)
fig.update_yaxes(showticklabels=False, row=1, col=2)

# Update traces
fig.update_traces(cliponaxis=False)

# Save the chart
fig.write_image("deployment_platforms_comparison.png")
fig.write_image("deployment_platforms_comparison.svg", format="svg")