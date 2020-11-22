package com.github.taehoio.idl.apis.v1.api;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler",
    comments = "Source: apis/v1/api/api.proto")
public final class ApiGrpc {

  private ApiGrpc() {}

  public static final String SERVICE_NAME = "v1.api.Api";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckRequest,
      com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckResponse> getHealthCheckMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "HealthCheck",
      requestType = com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckRequest.class,
      responseType = com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckRequest,
      com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckResponse> getHealthCheckMethod() {
    io.grpc.MethodDescriptor<com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckRequest, com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckResponse> getHealthCheckMethod;
    if ((getHealthCheckMethod = ApiGrpc.getHealthCheckMethod) == null) {
      synchronized (ApiGrpc.class) {
        if ((getHealthCheckMethod = ApiGrpc.getHealthCheckMethod) == null) {
          ApiGrpc.getHealthCheckMethod = getHealthCheckMethod =
              io.grpc.MethodDescriptor.<com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckRequest, com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "HealthCheck"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ApiMethodDescriptorSupplier("HealthCheck"))
              .build();
        }
      }
    }
    return getHealthCheckMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.github.taehoio.idl.apis.v1.api.ApiProto.HelloRequest,
      com.github.taehoio.idl.apis.v1.api.ApiProto.HelloResponse> getHelloMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Hello",
      requestType = com.github.taehoio.idl.apis.v1.api.ApiProto.HelloRequest.class,
      responseType = com.github.taehoio.idl.apis.v1.api.ApiProto.HelloResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.github.taehoio.idl.apis.v1.api.ApiProto.HelloRequest,
      com.github.taehoio.idl.apis.v1.api.ApiProto.HelloResponse> getHelloMethod() {
    io.grpc.MethodDescriptor<com.github.taehoio.idl.apis.v1.api.ApiProto.HelloRequest, com.github.taehoio.idl.apis.v1.api.ApiProto.HelloResponse> getHelloMethod;
    if ((getHelloMethod = ApiGrpc.getHelloMethod) == null) {
      synchronized (ApiGrpc.class) {
        if ((getHelloMethod = ApiGrpc.getHelloMethod) == null) {
          ApiGrpc.getHelloMethod = getHelloMethod =
              io.grpc.MethodDescriptor.<com.github.taehoio.idl.apis.v1.api.ApiProto.HelloRequest, com.github.taehoio.idl.apis.v1.api.ApiProto.HelloResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Hello"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.taehoio.idl.apis.v1.api.ApiProto.HelloRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.github.taehoio.idl.apis.v1.api.ApiProto.HelloResponse.getDefaultInstance()))
              .setSchemaDescriptor(new ApiMethodDescriptorSupplier("Hello"))
              .build();
        }
      }
    }
    return getHelloMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ApiStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ApiStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ApiStub>() {
        @java.lang.Override
        public ApiStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ApiStub(channel, callOptions);
        }
      };
    return ApiStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ApiBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ApiBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ApiBlockingStub>() {
        @java.lang.Override
        public ApiBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ApiBlockingStub(channel, callOptions);
        }
      };
    return ApiBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ApiFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<ApiFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<ApiFutureStub>() {
        @java.lang.Override
        public ApiFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new ApiFutureStub(channel, callOptions);
        }
      };
    return ApiFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class ApiImplBase implements io.grpc.BindableService {

    /**
     */
    public void healthCheck(com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckRequest request,
        io.grpc.stub.StreamObserver<com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getHealthCheckMethod(), responseObserver);
    }

    /**
     */
    public void hello(com.github.taehoio.idl.apis.v1.api.ApiProto.HelloRequest request,
        io.grpc.stub.StreamObserver<com.github.taehoio.idl.apis.v1.api.ApiProto.HelloResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getHelloMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getHealthCheckMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckRequest,
                com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckResponse>(
                  this, METHODID_HEALTH_CHECK)))
          .addMethod(
            getHelloMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                com.github.taehoio.idl.apis.v1.api.ApiProto.HelloRequest,
                com.github.taehoio.idl.apis.v1.api.ApiProto.HelloResponse>(
                  this, METHODID_HELLO)))
          .build();
    }
  }

  /**
   */
  public static final class ApiStub extends io.grpc.stub.AbstractAsyncStub<ApiStub> {
    private ApiStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ApiStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ApiStub(channel, callOptions);
    }

    /**
     */
    public void healthCheck(com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckRequest request,
        io.grpc.stub.StreamObserver<com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getHealthCheckMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void hello(com.github.taehoio.idl.apis.v1.api.ApiProto.HelloRequest request,
        io.grpc.stub.StreamObserver<com.github.taehoio.idl.apis.v1.api.ApiProto.HelloResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getHelloMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class ApiBlockingStub extends io.grpc.stub.AbstractBlockingStub<ApiBlockingStub> {
    private ApiBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ApiBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ApiBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckResponse healthCheck(com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckRequest request) {
      return blockingUnaryCall(
          getChannel(), getHealthCheckMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.github.taehoio.idl.apis.v1.api.ApiProto.HelloResponse hello(com.github.taehoio.idl.apis.v1.api.ApiProto.HelloRequest request) {
      return blockingUnaryCall(
          getChannel(), getHelloMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class ApiFutureStub extends io.grpc.stub.AbstractFutureStub<ApiFutureStub> {
    private ApiFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ApiFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new ApiFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckResponse> healthCheck(
        com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getHealthCheckMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.github.taehoio.idl.apis.v1.api.ApiProto.HelloResponse> hello(
        com.github.taehoio.idl.apis.v1.api.ApiProto.HelloRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getHelloMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_HEALTH_CHECK = 0;
  private static final int METHODID_HELLO = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final ApiImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(ApiImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_HEALTH_CHECK:
          serviceImpl.healthCheck((com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckRequest) request,
              (io.grpc.stub.StreamObserver<com.github.taehoio.idl.apis.v1.api.ApiProto.HealthCheckResponse>) responseObserver);
          break;
        case METHODID_HELLO:
          serviceImpl.hello((com.github.taehoio.idl.apis.v1.api.ApiProto.HelloRequest) request,
              (io.grpc.stub.StreamObserver<com.github.taehoio.idl.apis.v1.api.ApiProto.HelloResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class ApiBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ApiBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.github.taehoio.idl.apis.v1.api.ApiProto.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Api");
    }
  }

  private static final class ApiFileDescriptorSupplier
      extends ApiBaseDescriptorSupplier {
    ApiFileDescriptorSupplier() {}
  }

  private static final class ApiMethodDescriptorSupplier
      extends ApiBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    ApiMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (ApiGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ApiFileDescriptorSupplier())
              .addMethod(getHealthCheckMethod())
              .addMethod(getHelloMethod())
              .build();
        }
      }
    }
    return result;
  }
}
