import React from "react";

export default class RouteErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("Route error boundary caught: ", error, info);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    // naive retry: reload the page chunk; in most cases returning to the route will remount
    if (this.props.onRetry) this.props.onRetry();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center py-12">
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-300">Something went wrong loading this page.</p>
            <button
              type="button"
              onClick={this.handleRetry}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent text-black text-sm font-medium hover:bg-accent/90"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

